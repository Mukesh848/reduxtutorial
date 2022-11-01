import { StyleSheet } from "react-native"
import colorpath from "../constants/colorpath"


export const Styles = StyleSheet.create(
  {
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
    ,
    detailscreenview:
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:16,
        marginVertical:16,
        backgroundColor:colorpath.GREY,
        borderRadius:16
      }
    ,
    bstyle:
    {
      marginLeft: 10,
      backgroundColor:colorpath.BLACK,
      borderRadius: 16,
      width: 20,
      alignItems: 'center',
      justifyContent:'center'
    },
    btnText:
      {color:colorpath.WHITE,
        fontSize:13
      }
    ,
    flatstyle:
    {
      marginTop: 16,
      backgroundColor:colorpath.WHITE,
      height: 100,
      marginHorizontal: 16,
      borderRadius: 16,
      justifyContent: 'center',
      paddingLeft: 14,
    },
    bview:
    {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 14,
      marginTop: 30,
    }
    ,
    additembtnview:
    {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 14,
      marginTop: 30
    }
    ,
    additembtn: {
      marginLeft: 10,
      backgroundColor: colorpath.BLACK,
      borderRadius: 16,
      alignItems: 'center',
      padding:4,
    }
  }
) 
