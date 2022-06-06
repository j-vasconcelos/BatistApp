package com.apprest.entities;

import java.io.Serializable;
import java.util.Date;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Devocional implements Serializable {

    private static final long serialVersionUID = 1L;
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull(message = "Campo Titulo Devocional é de preencimento obrigatório.")
    @NotBlank(message = "Campo Titulo Devocional é de preencimento obrigatório.")
    @Column(name = "nm_titulo_Devocional", length = 255)
    private String tituloDevocional;

    @NotNull(message = "Campo Texto Versiculo é de preencimento obrigatório.")
    @NotBlank(message = "Campo Titulo Devocional é de preencimento obrigatório.")
    @Column(name = "ds_texto_Versiculo", length = 1000)
    private String textoVersiculo;

    @NotNull(message = "Campo Texto Devocional é de preencimento obrigatório.")
    @NotBlank(message = "Campo Titulo Devocional é de preencimento obrigatório.")
    @Column(name = "ds_texto_Devocional", length = 2000)
    private String textoDevocional;

    @NotNull(message = "Campo Texto Oracao é de preencimento obrigatório.")
    @NotBlank(message = "Campo Titulo Devocional é de preencimento obrigatório.")
    @Column(name = "ds_texto_Oracao", length = 1000)
    private String textoOracao;

    @NotNull(message = "Campo Data da Postagem é de preencimento obrigatório.")
    @Column(name = "dt_data_Postagem")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date dataPostagem;

    @NotNull(message = "Campo Hora da Postagem é de preencimento obrigatório.")
    @Column(name = "dt_hora_Postagem")
    @JsonFormat(pattern="HH:mm:ss")
    private Date horaPostagem;
    
}