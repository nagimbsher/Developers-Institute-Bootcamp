// based on instructions at http://www.cms.gov/Regulations-and-Guidance/HIPAA-Administrative-Simplification/NationalProvIdentStand/downloads/NPIcheckdigit.pdf

var NPI = { 

    get_npi_check_digit:
    function( id_portion )
    {
        var checksum80840 = 24; // 80 indicates health applications and 840 indicates the United States
        var checksum = checksum80840;
        var digits = id_portion.toString( ).split( "" );
        var digit_position;
        var digit;
        var checksum_roundup;
    
        if( digits.length != 9 )
            throw "expected 9 digits in id_portion, got " + digits.length;
    
        for( digit_position in digits )
        {
            digit = parseInt( digits[digit_position] );
    
            if( digit_position % 2 === 0 )
                ( digit * 2 ).toString( ).split( "" ).forEach(
                    function( element, index, array )
                    {
                        checksum += parseInt( element );
                    }
                );
            else
                checksum += digit;
        }
    
        checksum_roundup = parseInt( checksum / 10 );
        if( checksum % 10 > 0 ) checksum_roundup += 1;
        checksum_roundup *= 10;
            
        return checksum_roundup - checksum;
    },
    
    check_npi:
    function( npi )
    {
        return npi.toString( ).length == 10 && NPI.get_npi_check_digit( parseInt( npi / 10 ) ) === ( npi % 10 );
    }

};