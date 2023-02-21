package com.aldomelillo.book.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldomelillo.book.model.PickUpPoint;
import com.aldomelillo.book.service.PickUpPointService;

@RestController
@RequestMapping("/api/pickUpPoint")
public class PickUpPointController {

    @Autowired
    private PickUpPointService pickUpPointService;


    @PostMapping("/create")
    public ResponseEntity<PickUpPoint> savePickUpPoint(@RequestBody PickUpPoint pickUpPoint) {
        return new ResponseEntity<>(pickUpPointService.savePickUpPoint(pickUpPoint), HttpStatus.CREATED);
    }


    @GetMapping("/pickUpPoint/{id}")
    public PickUpPoint getPickUpPointById(@PathVariable Long id) {
        return pickUpPointService.findPointById(id);
    }


    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        pickUpPointService.deletePointById(id);
    }

}