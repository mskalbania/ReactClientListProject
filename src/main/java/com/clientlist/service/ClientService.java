package com.clientlist.service;

import com.clientlist.pojo.Client;
import com.clientlist.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {


    private ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public ResponseEntity<?> getAll() {
        List<Client> clients = clientRepository.findAll();
        return generateResponseEntity(clients);
    }

    public ResponseEntity<?> getAllByYear(int request) {
        List<Client> clients = clientRepository.findClientByYear(request);
        return generateResponseEntity(clients);
    }

    public ResponseEntity<?> getAllByNameRegex(String request) {
        List<Client> clients = clientRepository.findAllByNameRegex(request);
        return generateResponseEntity(clients);
    }

    public ResponseEntity<?> addClient(Client client) {
        return ResponseEntity.ok(clientRepository.save(client));
    }

    private ResponseEntity<?> generateResponseEntity(List<Client> clientList) {
        if (!clientList.isEmpty()) {
            return ResponseEntity.ok(clientList);
        } else return ResponseEntity.notFound().build();
    }
}
