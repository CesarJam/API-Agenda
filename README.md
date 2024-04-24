GET
https://us-central1-agenda-jsp.cloudfunctions.net/app/api/agenda
---
POST
https://us-central1-agenda-jsp.cloudfunctions.net/app/api/agenda
{
  "nombre": "pablooooo",
  "cargo": "a",
  "detalle": "a",
  "telefonoCelular": "a",
  "telefonoFijo": "a",
  "paginaWeb": "a",
  "correo": "a",
  "facebook": "a",
  "direccion": {
    "calle": "principal",
    "numero": "32",
    "coloniaLocalidad": "petaquilas",
    "codigoPostal": "39000"
  }
}
--
PUT

https://us-central1-agenda-jsp.cloudfunctions.net/app/api/agenda/(COLOCAR ID)
{
  "nombre": "pablooooo",
  "cargo": "a",
  "detalle": "a",
  "telefonoCelular": "a",
  "telefonoFijo": "a",
  "paginaWeb": "a",
  "correo": "a",
  "facebook": "a",
  "direccion": {
    "calle": "principal",
    "numero": "32",
    "coloniaLocalidad": "petaquilas",
    "codigoPostal": "39000"
  }
}
---
DELETE
https://us-central1-agenda-jsp.cloudfunctions.net/app/api/agenda/(COLOCAR ID)


--------------

npm install -g firebase-tools

firebase init

firebase login

npm i express cors

______________

$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\Pablo\Downloads\credenciales.json"

----
