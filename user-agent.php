<?php
$flag = false;
$tmp = $_SERVER['HTTP_USER_AGENT'];
if(strpos($tmp, 'Googlebot') !== false){
    $flag = true;
} else if(strpos($tmp, 'Baiduspider') >0){
    $flag = true;
} else if(strpos($tmp, 'Yahoo! Slurp') !== false){
    $flag = true;
} else if(strpos($tmp, 'msnbot') !== false){
    $flag = true;
} else if(strpos($tmp, 'Sosospider') !== false){
    $flag = true;
} else if(strpos($tmp, 'YodaoBot') !== false || strpos($tmp, 'OutfoxBot') !== false){
    $flag = true;
} else if(strpos($tmp, 'Sogou web spider') !== false || strpos($tmp, 'Sogou Orion spider') !== false){
    $flag = true;
} else if(strpos($tmp, 'fast-webcrawler') !== false){
    $flag = true;
} else if(strpos($tmp, 'Gaisbot') !== false){
    $flag = true;
} else if(strpos($tmp, 'ia_archiver') !== false){
    $flag = true;
} else if(strpos($tmp, 'altavista') !== false){
    $flag = true;
} else if(strpos($tmp, 'lycos_spider') !== false){
    $flag = true;
} else if(strpos($tmp, 'Inktomi slurp') !== false){
    $flag = true;
}
if($flag == false){
			//用户看到的内容
			 require_once("news2.htm");
 }else{
			//搜索引擎看到的内容
			 require_once("news1.htm");
 } ?>