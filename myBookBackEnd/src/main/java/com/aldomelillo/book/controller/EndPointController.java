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

import com.aldomelillo.book.model.EndPoint;
import com.aldomelillo.book.service.EndPointService;

@RestController
@RequestMapping("/endpoint")
public class EndPointController {

    @Autowired
    private EndPointService endPointService;

    @PostMapping("/")
    public EndPoint saveEndPoint(@RequestBody EndPoint endPoint) {
        return endPointService.saveEndPoint(endPoint);
    }

    @GetMapping("/endPoint/{id}")
    public Optional<EndPoint> getEndPointById(@PathVariable Long id) {
        return endPointService.findPointById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        endPointService.deletePointById(id);
    }

}