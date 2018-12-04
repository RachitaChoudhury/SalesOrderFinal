package com.example.sales.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.sales.model.Sales;
import com.example.sales.repository.SalesRepository;

@Service
public class SalesService {
   
	@Autowired
	private SalesRepository salesRepository;
	
	//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	
	//Create operation
	public Sales create(String userName,String prodName) {
		return salesRepository.save(new Sales(userName, prodName));
	}
	//Retrieve operation
	public List<Sales> getAll(){
		return salesRepository.findAll();
	}
	
	public void delete(String Id) {
		Sales p = salesRepository.findByid(Id);
		salesRepository.delete(p);
	}
	
	public Sales update(String Id, String userName,String prodName)
	{
		Sales p = salesRepository.findByid(Id);
		p.setUserName(userName);
		p.setProdName(prodName);
		return salesRepository.save(p);
	}
	
	public void deleteAll() {
		salesRepository.deleteAll();
	}
}