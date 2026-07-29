// Requirements:
// - Inside the APIClient class, define the sendRequest method with multiple overloaded
// versions.
// - One version should accept one input argument: a string for the endpoint. - Another version of the sendRequest method should accept three input arguments: a string for
// the endpoint, a string for the requestBody, and a boolean parameter requestStatus to verify
// whether the request is successful.
// - Create a method to demonstrate the usage of the overloaded sendRequest method.
// - Create an object of the APIClient class.
// - Call both versions of the sendRequest method on the APIClient object with different sets of
// input arguments to showcase method overloading. 

class APIClient {
    //Method Signature
    sendRequest(endpoint:string):void
    sendRequest(endpoint:string,requestBody:string,requestStatus:boolean):void

    //Method Implementation
    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean){
       console.log(`Endpoint Received ${endpoint}`);
       if(requestBody!==undefined){
        console.log(`RequestBody Received ${requestBody}`);
       }if(requestStatus!==undefined){
         console.log(`RequestStatus Received ${requestStatus}`);
       }
    }
}

const apiClient = new APIClient();
apiClient.sendRequest("https://example.com")
apiClient.sendRequest("https://send.com",`{
  name: "John",
  job: "QA Engineer"
}`,true)

apiClient.sendRequest("https://resume.com",`{
  name: "Muthu",
  job: "Developer"
}`,false)