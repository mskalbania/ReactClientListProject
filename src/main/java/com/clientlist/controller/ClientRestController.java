package com.clientlist.controller;

import com.clientlist.pojo.Client;
import com.clientlist.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost")
public class ClientRestController {

    private ClientService clientService;

    @Autowired
    public ClientRestController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> getAllClients() {
        return clientService.getAll();
    }

    @GetMapping(value = "/all/{request}")
    public ResponseEntity<?> getClientsByRequest(@PathVariable("request") String request) {

        if (request.matches("[0-9]*$")) {
            return clientService.getAllByYear(Integer.parseInt(request));
        } else return clientService.getAllByNameRegex(request);
    }

    @PostMapping(value = "/add")
    public ResponseEntity<?> addClient(@RequestBody Client client) {
        return clientService.addClient(client);
    }
}
