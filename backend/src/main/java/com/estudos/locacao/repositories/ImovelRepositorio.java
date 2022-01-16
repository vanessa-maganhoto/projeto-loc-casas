package com.estudos.locacao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estudos.locacao.entidades.Imovel;

public interface ImovelRepositorio extends JpaRepository <Imovel,Long>{
	
}
