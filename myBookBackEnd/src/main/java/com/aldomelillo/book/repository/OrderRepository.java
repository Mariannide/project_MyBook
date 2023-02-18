package com.aldomelillo.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aldomelillo.book.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
