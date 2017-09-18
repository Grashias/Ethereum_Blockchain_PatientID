pragma solidity ^0.4.11;
contract Patients_Hospital_details {
   
    // Basic structure with all fields
    struct Patients_details {
        string Patient_ID;
        uint Patient_ref;
        bytes PatientSignature;
        address PatientAddress;
        address HospAddress;
        //Currentaccount owner;
        string PatientDetails;
    }
   
    // Variable to represent the number of patients in the system
    // Incremented each time newPatientDetails() is called
    uint  numPatients;
    
    // List of signed patients for display at hospital hub UI
    uint[] signedPatients;
   
    // hospital hub address which initiates the contract becomes the owner of the contract
    address public owner;
   
    // List of all patients ref. Array mapping ref -> patient Details
    mapping (uint => Patients_details) Patients;
    
    // List of all patients ID. Array mapping ID -> patient Details
    mapping (string => Patients_details) Patientnew;
   
    // mapping which returns patient ref  for a given patient address. Patient Address -> Patient_ref
    mapping (address => uint) PatientLink;
   
        // mapping which returns patient ref for a given Hospital address. Hospital Address -> Patient_ref
    mapping (address => uint[]) HospitalLink;
   
    // Initial constructor call for intializing contract
    function Patients_Hospital_details(){
        numPatients = 5;
        owner = msg.sender;
    }
   
   
    // Modifier for permission to only functions executed by HUB
    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }
    
    // Modifier to allow permission to only the account specified in the _account variable
    modifier onlyBy(address _account)
    {
        require(msg.sender == _account);
        _;
    }
   
    // Method for registering patient details from hospitals UI.
    function newPatientDetails(string Patient_ID, bytes PatientSignature, address PatientAddress, address HospAddress, string PatientDetails) onlyBy(HospAddress) returns (uint) {
        if(PatientLink[PatientAddress] == 0){
            numPatients++;
            Patients[numPatients] = Patients_details(Patient_ID,numPatients,PatientSignature,PatientAddress,HospAddress,PatientDetails);
            Patientnew[Patient_ID] = Patients_details(Patient_ID,numPatients,PatientSignature,PatientAddress,HospAddress,PatientDetails);
            PatientLink[PatientAddress] = numPatients;
            HospitalLink[HospAddress].push(numPatients);
            signedPatients.push(numPatients);
            return numPatients;
        }else{
            return 0;
        }
    }
    
    //return the patient count current numpatients
    function getPatientsCount() constant returns (uint) {
        return numPatients;
    }
   
    // Prefix hash is appended to signed user secret only because Solidity requires this format
    // When there is a match between the decoded address using 'ecrecover' and the investor address stored in 'details' array, verify method returns true
    // Returns result to validate method
    function verify(bytes32 hash, uint8 v, bytes32 r, bytes32 s, uint Patient_ref) constant returns(bool) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = sha3(prefix, hash);
        return ecrecover(prefixedHash, v, r, s) == Patients[Patient_ref].PatientAddress;
    }
   
    //returns patient ID
    function getpatientid() returns (string) {
        var pat_id = PatientLink[msg.sender];
        return (Patients[pat_id].Patient_ID);
    }
   
     // Function used in the hub UI, to retrieve list of all signed mandates in the hub
    function gethosphubcount() returns (uint[]){
        return signedPatients;
    }
    // Function used in the hub UI, to retrieve list of all signed mandates details in the hub
    function getHosp_Hub_Details(uint Patient_ref) constant onlyOwner returns (string,uint,bytes,address,address,string){
        //var Hosp_ID = PatientLink[msg.sender];
        return (Patients[Patient_ref].Patient_ID,Patients[Patient_ref].Patient_ref,Patients[Patient_ref].PatientSignature,Patients[Patient_ref].PatientAddress,Patients[Patient_ref].HospAddress,Patients[Patient_ref].PatientDetails);
    }
    
    //returns array of numpatients
    function getHospCount() returns (uint[]){
        return HospitalLink[msg.sender];
    }
    // Function used in the hospital UI, to retrieve list of all signed mandates details in the hub
    function getHospDetails(string Patient_ID) constant onlyBy(Patientnew[Patient_ID].HospAddress) returns (string,uint,bytes,address,address,string){
        //var Hosp_ID = PatientLink[msg.sender];
        return (Patientnew[Patient_ID].Patient_ID,Patientnew[Patient_ID].Patient_ref,Patientnew[Patient_ID].PatientSignature,Patientnew[Patient_ID].PatientAddress,Patientnew[Patient_ID].HospAddress,Patientnew[Patient_ID].PatientDetails);
    }
    
    //returns patients details in hospital page of their own hospital only
    function getownpatientsDetails(uint Patient_ref) constant onlyBy(Patients[Patient_ref].HospAddress) returns (string,uint,bytes,address,address,string){
        //var Hosp_ID = PatientLink[msg.sender];
        return (Patients[Patient_ref].Patient_ID,Patients[Patient_ref].Patient_ref,Patients[Patient_ref].PatientSignature,Patients[Patient_ref].PatientAddress,Patients[Patient_ref].HospAddress,Patients[Patient_ref].PatientDetails);
    }
}