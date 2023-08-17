package sg.edu.nus.iss.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import sg.edu.nus.iss.server.repositories.BookRepository;

@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
// @CrossOrigin
public class BookController {

    @Autowired
    private BookRepository bookRepo;

    @GetMapping(path = "/books")
    @ResponseBody
    public ResponseEntity<String> getBooks(){

        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();

        this.bookRepo.getBookSummary(20).stream()
            .map(bk -> Json.createObjectBuilder()
                .add("bookId", bk.bookId())
                .add("title", bk.title())
                .build())
            .forEach(j -> arrayBuilder.add(j));

        return ResponseEntity.ok(arrayBuilder.build().toString());
    }
    
}
