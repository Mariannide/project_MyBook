package com.aldomelillo.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aldomelillo.book.model.PickUpPoint;
import com.aldomelillo.book.repository.PickUpPointRepository;

@Service
public class PickUpPointService {

    @Autowired
    private PickUpPointRepository pickUpPointRepository;

    public PickUpPoint savePickUpPoint(PickUpPoint pickUpPoint){
        return pickUpPointRepository.save(pickUpPoint);
    }

    public List<PickUpPoint> getAllPoint(){
        return pickUpPointRepository.findAll();
    }
    
    public Optional<PickUpPoint> findPointById(Long id){
        return pickUpPointRepository.findById(id);
    }
    

    public void deletePointById(Long id){
        pickUpPointRepository.deleteById(id);
    }
    
}
