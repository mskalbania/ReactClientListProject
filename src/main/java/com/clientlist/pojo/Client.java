package com.clientlist.pojo;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Client {

    @Id
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "left_lens")
    private String leftLens;
    @Column(name = "right_lens")
    private String rightLens;
    @Column(name = "lenses_type")
    private String lensesType;
    @Column(name = "holder_model")
    private String holderModel;
    private LocalDate date;

    public Client() {
    }

    public Client(String fullName, String leftLens, String rightLens, String lensesType, String holderModel, LocalDate date) {
        this.fullName = fullName;
        this.leftLens = leftLens;
        this.rightLens = rightLens;
        this.lensesType = lensesType;
        this.holderModel = holderModel;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getLeftLens() {
        return leftLens;
    }

    public String getRightLens() {
        return rightLens;
    }

    public String getLensesType() {
        return lensesType;
    }

    public String getHolderModel() {
        return holderModel;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setLeftLens(String leftLens) {
        this.leftLens = leftLens;
    }

    public void setRightLens(String rightLens) {
        this.rightLens = rightLens;
    }

    public void setLensesType(String lensesType) {
        this.lensesType = lensesType;
    }

    public void setHolderModel(String holderModel) {
        this.holderModel = holderModel;
    }

    public void setDate(String date) {
        this.date = LocalDate.parse(date);
    }
}
