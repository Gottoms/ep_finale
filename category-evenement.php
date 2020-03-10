<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Astral
 * @since 0.1
 */
get_header();
/* 
* Functions hooked into astral_top_banner action
* 
* @hooked astral_inner_banner
*/
do_action( 'astral_top_banner' );

?>
	<section class="align-blog" id="blog">
        <div class="container">
            <?php
                
                
               
               
                echo "<h1>".category_description()."</h1>";
               echo '<div class="oGrid">';
                // The 2nd Loop

                while (have_posts()) {
                   the_post();

			        get_template_part( 'template-parts/content', 'evenement' );
                    $oMois = (int)get_the_date("m");
                    $oJour = (int)get_the_date("j");

                    
                    
                    switch($oMois%9){
                    case 0:echo "<div class='septembre' style='grid-area:".$oJour."/".($oMois%9 + 1)."/".($oJour+1)."/".($oMois%9 + 1).";' id=".get_the_ID().">";
                    echo "<p>" . get_the_date("j") ." - ".get_the_date("m"). " - ".get_the_date("y") ."</p>";
                    echo "<p>".get_the_title()."</p>";
                    echo "<p>".$oJour."/".($oMois%9 + 1)."/".($oJour+1)."/".($oMois%9 + 1)."</p>";
                    echo "</div>";
                    break;

                    case 1:

                    echo "<div class='octobre' style='grid-area:".$oJour."/".($oMois%9 + 1)."/".($oJour+1)."/".($oMois%9 + 1).";' id=".get_the_ID().">";
                    echo "<p>" . get_the_date("j") ." - ".get_the_date("m"). " - ".get_the_date("y") ."</p>";
                    echo "<p>".get_the_title()."</p>";
                    echo "<p>".$oJour."/".($oMois%9 + 1)."/".($oJour+1)."/".($oMois%9 + 1)."</p>";
                    echo "</div>";
                    break;
                    
                    

                    case 2:
                    echo "<div class='novembre' style='grid-area:".$oJour."/".($oMois%9 + 1)."/".($oJour+1)."/".($oMois%9 + 1).";' id=".get_the_ID().">";
                    echo "<p>" . get_the_date("j") ." - ".get_the_date("m"). " - ".get_the_date("y") ."</p>";
                    echo "<p>".get_the_title()."</p>";
                    echo "<p>".$oJour."/".($oMois%9 + 1)."/".($oJour+1)."/".($oMois%9 + 1)."</p>";
                    echo "</div>";
                    break;
                    }
                    
                    }
                           

                echo '</div>';
            ?>
        </div>
    </section>
<?php
get_footer();