package com.aldomelillo.book.model;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

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
public class EndPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String point_name;

    @Column
    private String point_address ;

    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate point_date;

    public EndPoint(String point_name, String point_address, LocalDate point_date) {
        this.point_name = point_name;
        this.point_address = point_address;
        this.point_date = point_date;
    }


}