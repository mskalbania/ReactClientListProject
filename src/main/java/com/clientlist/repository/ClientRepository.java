package com.clientlist.repository;

import com.clientlist.pojo.Client;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClientRepository extends CrudRepository<Client, Long> {

    @Query(value = "SELECT C FROM Client C WHERE LOWER(C.fullName) LIKE LOWER(CONCAT(:request,'%'))")
    List<Client> findAllByNameRegex(@Param("request") String request);

    @Query(value = "SELECT * FROM client WHERE EXTRACT(YEAR FROM date) = ?1" ,nativeQuery = true)
    List<Client> findClientByYear(int year);

    List<Client> findAll();
}
