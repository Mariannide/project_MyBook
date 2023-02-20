package com.aldomelillo.book.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldomelillo.book.model.Buyer;
import com.aldomelillo.book.service.BuyerService;

@RestController
@RequestMapping("/api/buyer")
@CrossOrigin


public class BuyerController {
    
@Autowired
BuyerService buyerService;

@GetMapping("/all")
public ResponseEntity<List<Buyer>>getAllBuyer(){
    return new ResponseEntity<>(buyerService.getAllBuyers(),HttpStatus.OK);
}

@PostMapping("/create")
public ResponseEntity<Buyer> createBuyer(@RequestBody Buyer newBuyer){
    return new ResponseEntity<>(buyerService.saveBuyer(newBuyer), HttpStatus.CREATED);
}

}
