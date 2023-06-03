package com.example.vue.web.dao;

import org.apache.ibatis.annotations.Mapper;

import com.example.vue.web.vo.memberVo;

@Mapper
public interface memberDao {

	void insertMember(memberVo vo);

	memberVo memberLogin(memberVo vo);

	int checkId(memberVo vo);

}
