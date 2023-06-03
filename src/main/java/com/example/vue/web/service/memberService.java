package com.example.vue.web.service;

import com.example.vue.web.vo.memberVo;

public interface memberService {

	void insertMember(memberVo vo);

	memberVo memberLogin(memberVo member);

	int checkId(memberVo vo);

}
