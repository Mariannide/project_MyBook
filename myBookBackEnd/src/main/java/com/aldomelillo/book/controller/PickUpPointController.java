package com.aldomelillo.book.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin //accesso alle Api da un link diff
public class PickUpPointController {


    @Autowired
    private PickUpPointService pickUpPointService;


    @GetMapping("/{id}")
    public ResponseEntity<PickUpPoint> findbyid(@PathVariable Long pickId) {
        return new ResponseEntity<>(pickUpPointService.findPointById(pickId), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PickUpPoint>> findAll(){
        return new ResponseEntity<>(pickUpPointService.getAllPoint(), HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<PickUpPoint> savePickUpPoint(@RequestBody PickUpPoint pickUpPoint) {
        return new ResponseEntity<>(pickUpPointService.savePickUpPoint(pickUpPoint), HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        pickUpPointService.deletePointById(id);
    }

   

}