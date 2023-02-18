package com.aldomelillo.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aldomelillo.book.model.EndPoint;
import com.aldomelillo.book.repository.EndPointRepository;

@Service
public class EndPointService {

    @Autowired
    private EndPointRepository endPointRepository;

    public EndPoint saveEndPoint(EndPoint endPoint){
        return endPointRepository.save(endPoint);
    }

    public List<EndPoint> getAllPoint(){
        return endPointRepository.findAll();
    }
    
    public Optional<EndPoint> findPointById(Long id){
        return endPointRepository.findById(id);
    }
    

    public void deletePointById(Long id){
        endPointRepository.deleteById(id);
    }
    
}
