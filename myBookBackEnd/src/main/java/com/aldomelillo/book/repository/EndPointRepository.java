package com.aldomelillo.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aldomelillo.book.model.EndPoint;

public interface EndPointRepository extends JpaRepository<EndPoint, Long>{

    
}
