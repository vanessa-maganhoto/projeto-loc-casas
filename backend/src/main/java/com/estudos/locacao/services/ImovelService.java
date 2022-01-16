package com.estudos.locacao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.estudos.locacao.dto.ImovelDTO;
import com.estudos.locacao.entidades.Imovel;
import com.estudos.locacao.repositories.ImovelRepositorio;

@Service
public class ImovelService {

	@Autowired
	private ImovelRepositorio repository;
	
	@Transactional(readOnly = true)
	public  Page<ImovelDTO> findAll(Pageable pageable){
		Page<Imovel> result = repository.findAll(pageable);
		Page<ImovelDTO> page = result.map(x -> new ImovelDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public  ImovelDTO findById(Long id){
		Imovel result = repository.findById(id).get();
		ImovelDTO dto = new ImovelDTO(result);
		return dto;
	}
}
