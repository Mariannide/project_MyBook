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

import com.aldomelillo.book.model.Order;
import com.aldomelillo.book.service.OrderService;

@RestController
@RequestMapping("/reservations")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/")
    public Order saveReservation(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }

    @GetMapping("/buyer/{id}")
    public Optional<Order> getReservationsByBuyer(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        orderService.deleteorderById(id);
    }
}


