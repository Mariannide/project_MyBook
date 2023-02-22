package com.aldomelillo.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aldomelillo.book.model.Buyer;
import com.aldomelillo.book.repository.BuyerRepository;

@Service
public class BuyerService {

    @Autowired
    private BuyerRepository buyerRepository;

    public Buyer saveBuyer(Buyer buyer){
        return buyerRepository.save(buyer);
    }

    public List<Buyer> getAllBuyers(){
        return buyerRepository.findAll();
    }
    
    public Buyer findBuyerById(Long id){
         Optional<Buyer> person = buyerRepository.findById(id);

         if(person.isPresent()){
            return person.get();
         } else {
            return null;
         }
    }

    public Buyer findByEmail(String email){
        Optional<Buyer> person = buyerRepository.findByEmail(email);

        if(person.isPresent()){
           return person.get();
        } else {
           return null;
        }
   }

    public void deleteBuyerById(Long id){
        buyerRepository.deleteById(id);
    }
}
