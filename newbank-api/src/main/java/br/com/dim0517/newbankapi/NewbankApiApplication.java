package br.com.dim0517.newbankapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class NewbankApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewbankApiApplication.class, args);
	}

}
