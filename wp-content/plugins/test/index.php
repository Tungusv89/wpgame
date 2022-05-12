<?php
/*
Plugin Name: Test
*/

function testPage($the_content)
{   
    if(is_page( 'test' )){
        echo '<h5>Привет!</h5>';
    }    
}

add_filter('the_content', 'testPage');

