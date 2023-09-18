create table users(
	id int auto_increment primary key,
	username text not null, 
	password text not null, 
	createdAt datetime default current_timestamp(),
	updatedAt datetime default current_timestamp()
);

create table delivery(
	id int auto_increment primary key,
	remetente text not null, 
	destinatario text not null,
	frete double not null,
	createdAt datetime default current_timestamp(),
	updatedAt datetime default current_timestamp()
);

create table invoice(
	id int auto_increment primary key,
	delivery_id int not null,
	invoice_number text not null, 
	createdAt datetime default current_timestamp(),
	updatedAt datetime default current_timestamp(),
	
	foreign key (delivery_id) references delivery(id)
);

