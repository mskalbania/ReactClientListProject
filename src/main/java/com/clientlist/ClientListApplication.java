package com.clientlist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.clientlist")
public class ClientListApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientListApplication.class, args);
	}
}
