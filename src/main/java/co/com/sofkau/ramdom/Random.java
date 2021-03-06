package co.com.sofkau.ramdom;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Random implements Serializable {
    
    @Id
    private String id;
    private String date;
    private String originalList;
    private String randomList;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getOriginalList() {
        return originalList;
    }

    public void setOriginalList(String originalList) {
        this.originalList = originalList;
    }

    public String getRandomList() {
        return randomList;
    }

    public void setRandomList(String randomList) {
        this.randomList = randomList;
    }
}
