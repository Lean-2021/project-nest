# NEST JS - API

 

## 1. Instalar Dependencias

    npm install

## 2. Levantar Servidor

    npm start

## 3. Ruta del Servidor

    [Products](http://localhost:3000/products/)


## 4. Probar endpoint (Postman, Insomnia, etc)

**GET**

**Mostrar todos los productos disponibles**
    http://localhost:3000/products

**Mostrar producto según su ID**

     http://localhost:3000/products/ID DEL PRODUCTO

**POST**
**Guardar un nuevo Producto**

      http://localhost:3000/products

***Datos para cargar un nuevo producto (formato Json) :***

{
		title: texto (string),
		description: texto (string),
		thumbnail: texto(URL de la imagen),
		price: numérico(number),
		stock: numérico(number), sino se ingresa valor por defecto será **0**
}

***Ejemplo***

{
	"title":"Producto1",
	"description":"descripción del producto 1",
	"thumbnail":"http://imagen1.net/imagenproducto.jpg",
	"price": 1200,
	"stock": 10
}
**Al guardar un producto se muestra el producto creado recientemente**

**PUT**
**Actualizar Producto según su ID**

    http://localhost:3000/products/ID DEL PRODUCTO

Los datos para actualizar son los mismos que se usan para ***POST*** 
**Al actualizar un producto se muestra el producto actualizado** 

**DELETE**
**Borrar un producto según su ID**

    http://localhost:3000/products/ID DEL PRODUCTO
**Al borrar un producto se nos muestra el producto eliminado**

