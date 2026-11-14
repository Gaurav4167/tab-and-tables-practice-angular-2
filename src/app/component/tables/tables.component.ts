import { Component } from "@angular/core";
import { IaccountArr } from "src/app/const/accounts_i";
import { IbookArr } from "src/app/const/books_i";
import { IcityArr } from "src/app/const/cities_i";
import { IcourseArr } from "src/app/const/course_i";
import { IcustomerArr } from "src/app/const/customer_i";
import { IdoctorArr } from "src/app/const/doctor_i";
import { Iemp } from "src/app/const/emp_i";
import { IflightArr } from "src/app/const/flight_i";
import { IhotelArr } from "src/app/const/hotel_i";
import { ImovieArr } from "src/app/const/movies_i";
import { IorderArr } from "src/app/const/orders_i";
import { IproductArr } from "src/app/const/products_i";
import { IprojectArr } from "src/app/const/project_i";
import { IrestaurantArr } from "src/app/const/restaurants_i";
import { IstudentArr } from "src/app/const/student_i";
import { IteacherArr } from "src/app/const/teacher_i";
import { IvehicleArr } from "src/app/const/vehicles_i";
import { accountArr } from "src/app/models/accountsData";
import { bookArr } from "src/app/models/booksData";
import { cityArr } from "src/app/models/citiesData";
import { courseArr } from "src/app/models/courseData";
import { customerArr } from "src/app/models/customerData";
import { doctorArr } from "src/app/models/doctorsData";
import { empArr } from "src/app/models/empData";
import { flightArr } from "src/app/models/flightsdata";
import { hotelArr } from "src/app/models/hotelData";
import { movieArr } from "src/app/models/moviesData";
import { orderArr } from "src/app/models/ordersData";
import { productArr } from "src/app/models/productsData";
import { projectArr } from "src/app/models/projectsData";
import { restaurantArr } from "src/app/models/restaurantsData";
import { studentArr } from "src/app/models/studentData";
import { teacherArr } from "src/app/models/teachersdata";
import { vehicleArr } from "src/app/models/vehiclesData";


@Component({
    selector : "app-tablecomponent",
    templateUrl : "./tables.component.html",
    styleUrls : ["./tables.component.scss"]
})
export class TableComponent {
    emps : Iemp[] = empArr
    stds : IstudentArr[] = studentArr
    products : IproductArr[] = productArr
    courses : IcourseArr[] = courseArr
    books : IbookArr[] = bookArr
    customers : IcustomerArr[] = customerArr
    orders :IorderArr[] = orderArr
    movies : ImovieArr[] = movieArr
    teachers : IteacherArr[] = teacherArr
    vehicles : IvehicleArr[] = vehicleArr
    hotels : IhotelArr[] = hotelArr
    doctors : IdoctorArr[] = doctorArr
    restaurants : IrestaurantArr[] = restaurantArr
    accounts : IaccountArr[] = accountArr
    flights : IflightArr[] = flightArr
    projects :IprojectArr[] = projectArr
    cities : IcityArr[] = cityArr
}



















