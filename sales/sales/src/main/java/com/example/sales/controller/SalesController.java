package com.example.sales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sales.model.Sales;
import com.example.sales.service.SalesService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SalesController {

	@Autowired
	private SalesService salesService;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/create/userName/{userName}/prodName/{prodName}")
	public String create(@PathVariable("userName") String userName, @PathVariable("prodName") String prodName) {
		Sales p = salesService.create(userName, prodName);
		return p.toString();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getAll")
	public List<Sales> getAll() {
		return salesService.getAll();
	}


	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/id/{Id}") 
	public void delete(@PathVariable("Id") String Id) {
		salesService.delete(Id);
		//return "Deleted " + prodName;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update/id/{Id}/userName/{userName}/prodName/{prodName}")
	public void update(@PathVariable("Id") String Id, @PathVariable("userName") String userName, @PathVariable("prodName") String prodName) {
		salesService.update(Id, userName, prodName);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/deleteAll")
	public void deleteAll() {
		salesService.deleteAll();
	}

}