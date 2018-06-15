import jQuery from '../node_modules/jquery';
import Handlebars from 'handlebars';
import './main.css';
import { default as keys } from './keys';

(function ($) {
    'use strict';
    
    $(document).ready(function () {
        
        $('.overlay').add('.overlay__close').hide();
        
        $('.overlay__close').on('click', function (evt) {
            evt.preventDefault();
            $('.overlay').add('.overlay__close').hide();
        });
        
        var tmpl = $('[name="keylist"]').html();
        var render = Handlebars.compile(tmpl);
        
        $('#content').html(render({ keys: keys }));
        
        $('#content').on('submit', '[name="$$form"]', function(evt){
            evt.preventDefault();
            
            var form = evt.target,
                yaml = '';
            
            yaml += '#LANG: ' + form['$$lang'].value + '\n';
            
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i],
                    val = form[key].value;
                    
                yaml += key + ': \'' + val + '\'\n';
            }
            
            $('.overlay').html(yaml).add('.overlay__close').show();
            
        });
        
    });
    
})(jQuery);
