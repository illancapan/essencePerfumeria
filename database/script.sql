CREATE DATABASE essence;

-- Tabla de Usuarios
CREATE TABLE usuarios (
  id                BIGINT          PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre            VARCHAR(100)    NOT NULL,
  apellido          VARCHAR(100)    NOT NULL,
  email             VARCHAR(255)    UNIQUE NOT NULL,
  contrasena        VARCHAR(255)    NOT NULL,
  direccion         VARCHAR(255),
  telefono          VARCHAR(20),
  fecha_registro    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  estado            CHAR(1) DEFAULT '1', -- estado de la cuenta (1: activo, 0: inactivo)
  rol               VARCHAR(20)     NOT NULL -- rol del usuario (admin o cliente)
);

-- Tabla de Fragancias
CREATE TABLE fragancias (
  id                BIGINT          PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre            VARCHAR(100)    NOT NULL UNIQUE,
  descripcion       VARCHAR(255)
);

-- Tabla de Productos 
CREATE TABLE productos (
  id                BIGINT          PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre            VARCHAR(100)    NOT NULL,
  descripcion       VARCHAR(255),
  precio            DECIMAL(10, 2)  NOT NULL,
  descuento         DECIMAL(5, 2)   DEFAULT 0.00, -- Porcentaje de descuento
  stock             INT NOT NULL,
  fragancia_id      BIGINT          REFERENCES fragancias(id), -- Tipo de fragancia
  imagen            VARCHAR(1000),  -- URL de la imagen del producto
  fecha_creacion    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  fecha_modificacion TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Pedidos
CREATE TABLE pedidos (
  id                BIGINT          PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  usuario_id        BIGINT REFERENCES usuarios(id),
  fecha             TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  total             DECIMAL(10, 2)  NOT NULL,
  estado            CHAR(1) DEFAULT '0', -- estado del pedido (0: pendiente, 1: completado)
  metodo_pago       VARCHAR(50)     NOT NULL -- Tipo de pago (tarjeta, PayPal)
);

-- Tabla de Detalles de Pedido
CREATE TABLE detalles_pedido (
  id                BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  pedido_id         BIGINT REFERENCES pedidos(id),
  producto_id       BIGINT REFERENCES productos(id),
  cantidad          INT NOT NULL,
  precio_unitario   DECIMAL(10, 2) NOT NULL
);

-- Tabla de Historial de Pedidos
CREATE TABLE historial_pedidos (
  id                BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  pedido_id         BIGINT REFERENCES pedidos(id),
  estado            CHAR(1),
  fecha_cambio      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- Tabla de Carrito

CREATE TABLE carrito (
  id                BIGINT          PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  usuario_id        BIGINT REFERENCES usuarios(id),
  producto_id       BIGINT REFERENCES productos(id),
  cantidad          INT NOT NULL DEFAULT 1,
  fecha_agregado    TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);



-- INSERT TABLAS PRUEBAS


-- FRAGANCIAS
INSERT INTO fragancias (nombre, descripcion) VALUES
('Cítricos', 'Fragancias frescas y energizantes con notas cítricas.'),
('Florales', 'Aromas suaves y delicados basados en flores.'),
('Maderas', 'Fragancias profundas y cálidas con notas amaderadas.');


-- PRODUCTOS
INSERT INTO productos (nombre, descripcion, precio, descuento, stock, fragancia_id, imagen) VALUES
('Citrus Breeze', 'Una fragancia fresca con notas cítricas.', 25000, 0.00, 100, 1, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/es_CL/dw00885a6e/LNT%20LE%20PARFUM/LAN-LATAM3614274068801/3614274068801_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),
('Floral Fantasy', 'Una delicada mezcla de flores suaves.', 42000, 5.00, 200, 2, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/es/dw648a7f0a/LVEB%20EXTRAORDINAIRE/LE688200_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),
('Woody Whisper', 'Una fragancia cálida con notas amaderadas.', 50000, 10.00, 150, 3, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/default/dw9840ada2/mx/images/PACKSHOTS/FRAGRANCE/TRESOR/072025_Tresor/3147758034912_Tresor.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70'),
('Citrus Splash', 'Un aroma energizante con toques cítricos.', 22000, 0.00, 120, 1, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/default/dw1305fb33/mx/images/PACKSHOTS/FRAGRANCE/HYPNOSE/186025_Hypnose/3147758235548_Hypnose_eau_de_parfum.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70'),
('Midnight Woods', 'Una fragancia intensa con toques amaderados.', 54000, 15.00, 180, 3, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/es/dwd83d56c4/MILLE%20ET%20UNE%20ROSES/LD726800_1.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70'),
('Sunrise Citrus', 'Una mezcla brillante y vibrante de limón, pomelo y bergamota, que captura la esencia de una mañana iluminada por el sol. Perfecto para energizar tu espíritu.', 45000, 5.00, 150, 1, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/default/dw5eb52f09/chile/products/8155349_3147758155341_O_De_Lancome.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70'),
('Tropical Breeze', 'Una refrescante combinación de lima, mandarina y piña, evocando la sensación de una cálida brisa del océano. Ideal para un día vibrante y despreocupado.', 35000, 10.00, 180, 1, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/default/dw48997f72/mx/images/PACKSHOTS/FRAGRANCE/POEME/092025_Poeme/3147758155112_Poeme.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70'),
('Eternal Bloom', 'Una mezcla romántica de peonía, jazmín y rosa, que captura la esencia de un jardín en plena floración en primavera. Elegante y atemporal.', 32000, 0.00, 100, 2, 'https://www.lancome.cl/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-lancome-latam-master-catalog/default/dw715b012e/images/PACKSHOTS/FRAGRANCE/LAN-LATAM50403-MTR/Lancome-Fragrance-La-Nuit-Tresor-Intense-bottle-30ml-000-3614273650380-Front-v2.jpg?sw=465&sh=465&sm=cut&sfrm=png&q=70');


-- USUARIOS
INSERT INTO usuarios (nombre, apellido, email, contrasena, direccion, telefono, rol) VALUES
('Juan', 'Pérez', 'juanp@gmail.com', 'password123', 'Calle Falsa 123', '123456789', 'cliente'),
('María', 'López', 'maria.lopez@yahoo.com', 'password123', 'Avenida Siempreviva 456', '987654321', 'cliente'),
('Ana', 'Gómez', 'ana.gomez@hotmail.com', 'adminpassword', 'Calle Secundaria 789', '111222333', 'admin'),
('Pedro', 'Sánchez', 'pedro.sanchez@gmail.com', 'password123', 'Boulevard Central 101', '444555666', 'cliente'),
('Luis', 'Ramírez', 'luis.ramirez@gmail.com', 'adminpassword', 'Avenida Principal 202', '777888999', 'admin');

-- PEDIDOS
INSERT INTO pedidos (usuario_id, total, metodo_pago) VALUES
(1, 42000, 'Tarjeta'),
(2, 108000, 'PayPal'),
(3, 50000, 'Tarjeta'),
(4, 50000, 'PayPal'),
(5, 54000, 'Tarjeta');

-- DETALLES PEDIDOS
INSERT INTO detalles_pedido (pedido_id, producto_id, cantidad, precio_unitario) VALUES
(1, 2, 1, 42000),
(2, 5, 2, 54000),
(3, 3, 1, 50000),
(4, 1, 2, 25000),
(5, 3, 1, 50000);

--- script carrito
INSERT INTO carrito (usuario_id, producto_id, cantidad)
VALUES (2, 3, 2); -- Usuario con id 1 agrega 1 unidad del producto con id 2 al carrito
INSERT INTO carrito (usuario_id, producto_id, cantidad)
VALUES (1, 2, 1); -- Usuario con id 1 agrega 1 unidad del producto con id 2 al carrito
---
