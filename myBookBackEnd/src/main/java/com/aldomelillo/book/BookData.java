package com.aldomelillo.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.aldomelillo.book.model.Buyer;
import com.aldomelillo.book.model.EndPoint;
import com.aldomelillo.book.model.Order;
import com.aldomelillo.book.service.BuyerService;
import com.aldomelillo.book.service.EndPointService;
import com.aldomelillo.book.service.OrderService;

@Component
public class BookData implements CommandLineRunner{

    @Autowired
    BuyerService buyerService;
    @Autowired
    OrderService orderService;
    @Autowired
    EndPointService endPointService;



    @Override
    public void run(String... args) throws Exception {
        
        Buyer b1 = new Buyer("Giorgio", "Leo", "IT366363663");
        buyerService.saveBuyer(b1);
        Buyer b2 = new Buyer("Matteo", "Bruno", "IT3737737373");
        buyerService.saveBuyer(b2);
        Buyer b3 = new Buyer("Zara", "Dahuadi", "IT2828828282");
        buyerService.saveBuyer(b3);

        Order r1 = new Order(null, null, true, b3);
        orderService.saveOrder(r1);

        EndPoint p1 = new EndPoint(null, null, null);
        endPointService.saveEndPoint(p1);




        System.out.println("Aquì estoy!");

    }


    
}
