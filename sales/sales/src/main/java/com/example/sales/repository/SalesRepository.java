package com.example.sales.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.sales.model.Sales;
@Repository
public interface SalesRepository extends MongoRepository<Sales, String>{
   public Sales findByid(String Id);
}