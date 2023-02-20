package com.aldomelillo.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aldomelillo.book.model.PickUpPoint;

public interface PickUpPointRepository extends JpaRepository<PickUpPoint, Long>{

    
}
