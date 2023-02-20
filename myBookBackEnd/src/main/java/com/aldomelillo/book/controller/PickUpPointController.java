package com.aldomelillo.book.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/endpoint")
public class PickUpPointController {

    @Autowired
    private PickUpPointService pickUpPointService;

    @PostMapping("/")
    public PickUpPoint saveEndPoint(@RequestBody PickUpPoint pickUpPoint) {
        return pickUpPointService.savePickUpPoint(pickUpPoint);
    }

    @GetMapping("/endPoint/{id}")
    public Optional<PickUpPoint> getEndPointById(@PathVariable Long id) {
        return pickUpPointService.findPointById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        pickUpPointService.deletePointById(id);
    }

}