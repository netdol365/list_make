
const express = require('express');
const router = express.Router();
const mysql_odbc = require('../config/DbLoader')();
const connect = mysql_odbc.init();

// 게시글 전체 목록 조회
router.get('list/:page',function(request,response,next){
    const page = request.params.page;
    const sql = "select BOARD_SEQ, BOARD_WRITER, BOARD_SUBJECT, date_format(INS_DATE,'%Y-%m-%d %H:%i:%s') INS_DATE from tbl_board"; 
    connect.query(sql,function(error,rows){
        if(error)
        {
            console.log(error);
        }
        response.render('list',{rows:rows});
    });
});

// 글쓰기 페이지로
router.get('/write', function(request, response, next){
    response.render('write');
});

// 게시판 글 내용보기
router.get('/read/:BOARD_SEQ', function(request,response,next){
    let seq = request.params.BOARD_SEQ;
    let sql = "select BOARD_SEQ, BOARD_WRITER, BOARD_SUBJECT, BOARD_CONTENT, date_format(INS_DATE,'%Y-%m-%d %H:%i:%s') INS_DATE form tbl_board";
    connect.query(sql,[seq],function(error){
        if(error){
            console.log(error);
        }
        response.render('read',{row:row[0]});
    });
});

router.get('/re_write/:BOARD_SEQ',function(request, response,next){
    let seq = request.params.BOARD_SEQ;
    let sql = "select BOARD_SEQ, BOARD_WRITER, BOARD_SUBJECT, BOARD_CONTENT, date_format(INS_DATE,'%Y-%m-%d %H:%i:%s') INS_DATE form tbl_board";
    connect.query(sql,[seq],function(error){
        if(error){
            console.log(error);
        }
        response.render('read',{row:row[0]});
    });
});

router.get
module.exports = router;