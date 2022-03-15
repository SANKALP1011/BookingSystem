create database Bookingdb;
use Bookingdb;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqldatabase';

create table Demo(
 DemoName varchar(90)
 );
 drop table Demo;
 
 create table Flights(
 FlightCode int primary key,
 FlightName varchar(100),
 FlightStatus varchar(70),
 FlightComp varchar(80),
 FlightCost int,
 FlightDest varchar(100)
 );
 
 create table Trains(
 TrainCode int primary key,
 TrainName varchar(100),
 TrainStatus varchar(70),
 TrainCost int,
 TrainDest varchar(100)
 );
 
 create table Cabs(
 CabsCode int primary key,
 CabName varchar(100),
 CabStatus varchar(70),
 CabComp varchar(80),
 CabCost int,
 CabDest varchar(100)
 );

 insert into Flights
 values(12121,"QE21C","ON TIME","Indigo",4500,"Chennai"),
 (11211,"QE21C","ON TIME","Indigo",4500,"Chennai");
 
 select * from Flights;
 
 insert into Cabs
 values(10211,"OLA","ON TIME","Honda",790,"Lucknow to Kanpur");
 
 select * from Cabs;