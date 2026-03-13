#!/bin/bash

for i in {1..50}
do
  echo "change $i" >> stress_file.txt
  git add .
  git commit -m "stress commit $i"
  git push orgin Feacture/descargar_informacion_de_usuarios
  sleep 2
done
