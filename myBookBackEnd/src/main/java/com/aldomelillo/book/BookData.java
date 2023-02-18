package com.aldomelillo.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.aldomelillo.book.model.Buyer;
import com.aldomelillo.book.service.BuyerService;

@Component
public class BookData implements CommandLineRunner{

    @Autowired
    BuyerService buyerService;

    @Override
    public void run(String... args) throws Exception {
        
        Buyer b1 = new Buyer("Giorgio", "Leo", "IT366363663");
        buyerService.saveBuyer(b1);
    
        System.out.println("sono arrivato qui!");

    }


    
}
