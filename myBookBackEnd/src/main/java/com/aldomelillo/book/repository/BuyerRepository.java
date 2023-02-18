package com.aldomelillo.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aldomelillo.book.model.Buyer;

public interface BuyerRepository extends JpaRepository<Buyer,Long> {

    
}
