package com.aldomelillo.book.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data //con questo mi fa i getter e i setter
@NoArgsConstructor //costruttore vuoto invisibile
public class PickUpPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String point_name;


    @Column
    private String city_name;
    

    public PickUpPoint(String point_name, String city_name) {
        this.point_name = point_name;
        this.city_name = city_name;

    }



    public PickUpPoint save(PickUpPoint pickUpPoint) {
        return null;
    }



}