var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope){
 $scope.nombre = "Anddy";

 $scope.nuevoComentario= {};
 $scope.comentarios = [
   {
    comentario: "buen tutorial",
    username: "codigofacilito"
 },
   {
     comentario: "Mal tuto",
     username: "otrouser"
   }
 ];
 $scope.agregarComentario = function () {
   $scope.comentarios.push($scope.nuevoComentario);
   $scope.nuevoComentario = {};
 }
});﻿
