# React FrontEnd


## Setting Up Environment
Repository name: TRAFFOOT-FRONTEND
- Optionally, fork the repository.  If you don't fork the repository, you need to have permission on the repository.
- Clone the fork or repository
- Create a branch
- cp .env.example .env
- npm install
- npm start
- after making changes to the code base, create a pull request for your branch to master

## Key resources
Slide deck for pitch with images: https://xd.adobe.com/view/9599d657-dce6-4072-b4e1-c4be1f044b0d-c0ca/screen/aabb58ee-25f5-473f-827a-b97e41de7f8c/
Slide deck for new developers joining: https://docs.google.com/presentation/d/1XSUNdBJYgusXWB1LZbINliOT-b5e_ovwDinXuCtMMkg/edit#slide=id.p15
API specification: 
* BASE URL: https://sample-disjoin1.herokuapp.com/api/
* ENDPOINTS: 
1. geofence_stores:
    - GET: 
        {
          "center": [lat, lng],
          "radius": number
        }

2. userLogin:
    - POST:
      {
        "email": string,
        "password": string
      }

3. users:
    - POST:
      {
        "id":  number,
        "first_name": string,
        "last_name": string,
        "email": string,
        "password": string,
        "address": string
      }
    
    - DELETE:
      {
        "id": string
      }

4. Stores:
    - POST:
      {
        "sid": number,
        "sName": string,
        "username": string,
        "password": string,
        "streetName": string,
        "city": string,
        "state": string,
        "zipcode": string,
        "timestampUTC": string,
        "isActive": true
      }
