import React, { useMemo } from "react";
import { PhotoIdentifier } from "@react-native-community/cameraroll";
import { Image, TouchableOpacity, View } from "react-native";
import { inAppGalleryStyles, selectableImageStyles } from "./styles";

type Props = {
  imageHeight: number;
  isSelected: boolean;
  item: PhotoIdentifier;
  onImagePress: () => void;
  onImageLongPress: () => void;
  enableSelection?: boolean;
  selectionColor?: string;
};

const SelectableImage: React.FC<Props> = ({
  imageHeight,
  isSelected,
  item,
  onImagePress,
  enableSelection,
  onImageLongPress,
  selectionColor,
}) => {
  const touchableStyle = useMemo(() => {
    return [selectableImageStyles.touchable, { height: imageHeight }];
  }, [imageHeight]);

  const checkStyle = useMemo(() => {
    return [selectableImageStyles.checkImage, { tintColor: selectionColor }];
  }, [selectionColor]);

  const source = useMemo(() => {
    return { uri: item.node.image.uri };
  }, [item]);

  const checkSource = useMemo(() => {
    return {
      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAO1AAADtQB3D8e0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d152F51fe/79zfEQIAikxg4iERlK1pRwSPjadEqiiPS9rhbKyCiXrbuHqpuuzvY1u2xDseB7l3rEaECetpqFSxuRakCbZ2gjjiAdQAnSEFkKGMI+Z4/1gqZnuEe1n3/1vB+XVeuhPA8a30SyPP55vdbQ2QmktotIlYDey3zbRdgR2BV/f0oPwa4B1hffz/Kj+8AflZ/u2mBH9+UmRtm8fsgqTnhACCVExGrgIcAa4EDt/h+DVuX++oyCSd2K5sHg58B64BrtvyWmevKxZPkACDNUESsAA5g63Lf8vv9gBVl0hV3F3At8AO2GQ6oBoRby0WT+s8BQGpIROwNHAI8tv7+EOAxdO9v722xDrgS+Eb9/ZXAVZl5T9FUUk84AEhjqpftD2ZzyW8q/H1L5hqIDcC/sXkg+AZwZWb+qGgqqYMcAKRlRMTDgaOBY4AjgUcBK4uG0rZuoRoIvgB8Fvh8Zv68bCSp3RwApC1ExErgCWwu/KOpLshTtyRwFfA5qoHgc5n5/bKRpHZxANCgRcRuVH+r31T4hwM7Fw2lWVnHFgMB8FVvV9SQOQBoUOqr8p8EHA88A3giw70Kf+juBP4ZuAj4ZGb+W+E80lw5AKj3ImIN8HSqwj8O2LNsIrXUNdTDAHBJZt5ROI80Uw4A6p16H/8oqsJ/BvB4IIqGUtesB/6Fahi4KDO/VTiP1DgHAPVCRDwQOAF4LvBUYLeyidQzP6YaBi4ELs7M9YXzSFNzAFBnRcQvUBX+C6iW+FeVTaSBuAW4APgg8BkvJFRXOQCoUyJiF+DZVKV/PLBT2UQauJuA86mGgcsy877CeaSROQCo9eo34T2TqvSfhbfpqZ1uAD5MNQx8NjM3Fs4jLckBQK1U3653HHAS8Bxg17KJpLFcB/w9cF5mfqV0GGkhDgBqlYjYHzgVeAnVW/SkrvsKcCbwt5l5W+kw0iYOACouInagWtp/KdW+/g5lE0kzcQfV9sB7M/OLpcNIDgAqJiLWUv1N/8XAfoXjSPP0TeC9wPsz8+bSYTRMDgCaq4h4APA84GVU9+v7gB4N2d1UFw6+NzP/uXQYDYsDgOYiIvYGfhv4HWCfwnGkNroaOAM4NzPvLh1G/ecAoJmKiIOAVwEnA6sLx5G64EbgXcBfZeaNpcOovxwANBMRcQzwaqon9fm2PWl8dwPnAu/wTYWaBQcANaa+mv/5wGuAwwvHkfoigY8Bb8vMfykdRv3hAKCp1Y/nPRU4HXhY4ThSn10BvB34iI8d1rQcADSxiNiNqvRPB/YoHEcakmuBNwHvy8x7C2dRRzkAaGz13/hfCbwW2LNwHGnIfgD8d+ADrghoXA4AGllE7AS8AvhveCuf1CbfAV4PfNCXEGlUDgBaVkSsAk4D/gif2Ce12TeBPwUuSL+4axkOAFpURKwETgFehy/mkbrkq8CfZOb/Kh1E7eUAoO3Ur+J9IdXfJB5eOI6kyV0OvC4z/7F0ELWPA4C2EhHHUj2O9HGFo0hqzsXA72Xmt0sHUXv4hDYB1Zv5IuIjwKVY/lLfHAd8PSL+IiK8ZVeAKwCDFxG7An9I9bz+HQvHkTR7NwF/ArzHWweHzQFgoCIiqF7Q8yZgTeE4kubvm8D/lZmXlA6iMhwABigijqba539i6SySivso8OrM/EHpIJovrwEYkIg4ICL+Fvgslr+kygnAtyPiTfWWoAbCFYABqN/S93tUTwrbuXAcSe11PfDKzDy/dBDNngNAz0XE44GzgMNKZ5HUGRcAv5OZ15cOotlxC6CnImKniHgz8K9Y/pLG83zgqoh4aX3BsHrIFYAeqh/mcyZwUOEokrrvn4CXZuZ3SwdRs1wB6JGI2D0i3gtcguUvqRm/DFwZEX9Qvx9EPeEKQE9ExInAXwL7ls4iqbe+DpyWmV8qHUTTcwWg4yJiTUScD3wEy1/SbD0O+GJEvC0iVpcOo+m4AtBhEfFc4Gxg79JZJA3OVcALM/OrpYNoMq4AdFBE7BwR/y/wD1j+kso4mGo14DXeKdBNrgB0TEQcCvwN8MjSWSSpdglwUmb+tHQQjc4VgI6IiBUR8Vrgi1j+ktrlKVR3Cvxq6SAanSsAHRAR+wPnAU8unUWSlvHXVG8ZvL10EC3NAaDlIuLXgfcAe5TOIkkj+h7VBYJXlA6ixbkF0FIRsWtEvA/4EJa/pG55BPC5iPijiLBnWsoVgBaKiEdSvYzj4NJZJGlKnwb+c2beVDqItuZk1jIRcQJwBZa/pH54KvDliPClZC3jANAS9VX+fw6cD+xWOo8kNeihwGcj4tTSQbSZWwAtEBF7Ud3bf1zpLJI0Y+8Bfjcz15cOMnQOAIXVD/Y5n2pClqQhuBz4tcz8SekgQ+YWQEERcQrwOSx/ScNyONV1AceWDjJkDgAFRMSqiPgr4H3ATqXzSFIB+wCfjohXlw4yVG4BzFlEPJjqFr8jS2eRpJb4EHBKZt5VOsiQOADMUUQcDHwCOLBwFElqm8uB52bmDaWDDIVbAHMSEU8GPo/lL0kLOZzq9cKPKh1kKBwA5iAiTgI+BexeOosktdha4PMR8culgwyBA8CMRcSfAecCDygcRZK6YA/g4oj4rdJB+s5rAGYkIlYBZwEvKp1FkjrqTzLzDaVD9JUDwAxExO5UV/ofWziKJHXdOcDLMvPe0kH6xgGgYRGxFvg4vsxHkpryGeBXM/PW0kH6xAGgQfXbrj5B9YALSVJzvgUcn5k/Lh2kLxwAGhIRx1D9zd83+UnSbPwQ+JXM/H7pIH3gXQANiIinUd3mZ/lL0uw8FPjn+qFqmpIDwJQi4nnAx4CdS2eRpAHYD/iniHh86SBd5wAwhYj4DeDDwI6ls0jSgDwIuDQijigdpMscACYUEacBHwBWls4iSQO0O/CPvlJ4cg4AE4iI04Ez8fdPkkraFfhERBxfOkgXWWBjiog/Bt4JROkskiRWAx+NiBNLB+kaB4AxRMRbAB9LKUntsgr4kO8PGI8DwIjq8n9t6RySpAXtAJzrEDA6B4AR1Mv+lr8ktdsK4By3A0bjkwCXUV/w987SOSRJI1sPnJCZF5UO0mYOAEuob/U7Ey/4k6SuuQt4ZmZeVjpIWzkALKJ+yM8HcJtEkrrqduBpmfnF0kHayAFgAfXjfT+MD/mRpK67BXhyZn6tdJC2cQDYRv1in4/h430lqS9uBH45M68qHaRNHAC2UL/S91P4Yh9J6pvrgF/yVcKbOQDUIuIw4BJ8pa8k9dUPgf8jM39cOkgbOAAAEbEW+CKwT+kskqSZ+hZwdGbeWjpIaYO/wj0idgc+juUvSUPwGOAjEfGA0kFKG/QAEBGrgAuAg0tnkSTNza9QPeNl0AY9AABnAceWDiFJmrtTIuJ1pUOUNNgBICL+DHhR6RySpGL++5BfHjTIiwAj4iTg3NI5JEnFrQeOy8x/Kh1k3gY3AETEk6nu9R/8BSCSJABuBo7KzKtLB5mnQQ0AEXEw8Hlg99JZJEmtcg1wRGbeUDrIvAzmGoCIeDDwCSx/SdL21gIXRsTq0kHmZRADwBa3+x1YOIokqb0OB84pHWJeBjEAAGcAR5YOIUlqvf8zIl5dOsQ89P4agIg4BXhf6RySpM64D3hqZl5WOsgs9XoAiIhDgc8BO5XOIknqlBuAwzLzJ6WDzEpvtwAiYi/gfCx/SdL49gE+XF9D1ku9HAAiYgXwN8BDS2eRJHXW4cD/KB1iVno5AAD/N3Bc6RCSpM57eUScWjrELPTuGoCIOIFq6T9KZ5Ek9cLdwDGZ+eXSQZrUqwEgIh4JXAHsVjqLJKlXfkh1UeBNpYM0pTdbABGxK9XDfix/SVLTHgr8XX2NWS/05hcC/E/g4NIhJEm99VTgD0qHaEovtgAi4teBD5XOIUnqvQ3A0Zl5Rekg0+r8ABAR+wNXAnuUziJJGoTvAU/IzNtLB5lGp7cA6r2Y87D8JUnz8wjgL0qHmFanBwDgNcCTS4eQJA3OqRHxq6VDTKOzWwD1c/6/CDygdBZJ0iD9HDgkM39aOsgkOrkCEBE7Uz3q1/KXJJWyJ3BeRHTywXOdHACAdwCPLB1CkjR4TwFeXTrEJDq3BRARzwX+oXQOSZJq64EjMvOrpYOMo1MDQESsAb4B7F06iyRJW7iK6lHBd5UOMqqubQH8FZa/JKl9DgbeUDrEODqzAhARJwIfKZ1DkqRF3Ee1FfCl0kFG0YkBICJ2B74N7Fs6iyRJS/g68MTM3FA6yHK6sgXw/2D5S5La73HAfy0dYhStXwGIiGOBS4BO3mcpSRqcu6keEPTd0kGW0uoVgIjYCTgTy1+S1B07Ae9t+wOCWj0AAH8GHFQ6hCRJY/pl4LTSIZbS2i2AiHg88K/AytJZJEmawK3AwZl5fekgC2nlCkBE7ACcheUvSequBwLvKh1iMa0cAIDfAw4rHUKSpCk9v36OTeu0bgsgIg6geqTizqWzSJLUgOuB/5SZt5cOsqU2rgC8BctfktQf+wJ/VDrEtlq1AhARRwOfLZ1DkqSG3QM8OjN/UDrIJq1ZAajvlzyjdA5JkmZgR+DtpUNsqTUDAHAy8MTSISRJmpETIuIppUNs0ootgIjYFfgusKZ0FkmSZuibwOMz877SQdqyAvCHWP6SpP77ReDlpUNAC1YAImIt1W1/OxYNIknSfNwEHJSZN5cM0YYVgLdh+UuShmMvqnfdFFV0BaB+1e+lxQJIklTGBuBxmfntUgGKrQBExAq87U+SNEwrgXeWDFByC+CFwOMKnl+SpJKOi4inlTp5kS2AiFgJXA08fO4nlySpPS7PzCNKnLjUCsApWP6SJB0eEc8uceK5rwBExCqqh/4cMNcTS5LUTl8FDss5F3KJFYDTsPwlSdrkCcDz533Sua4ARMROwPeB/eZ2UkmS2u+bVLcFbpzXCee9AvAKLH9Jkrb1i8AL5nnCua0ARMQuwA+AfeZyQkmSuuU7wGPm9aKgea4AvBLLX5KkxTwS+K15nWwuKwARsRtwDbDnzE8mSVJ3/QB4VGbeO+sTzWsF4HQsf0mSlvMw4MXzONHMVwDqvf8fA3vM9ESSJPXDtcAjZn0twMpZHrx2Kpa/JJWWVLea/Ri4EfhZ/fMPoXo2y1rgwWWiaRsHAr8KfGiWJ5npCkBE7ED11L+1MzuJJGkxdwMfBj4J/GNm3rDUB0fEE4ATqR5K85jZx9MSrsjMw2d5glkPAL8G/P3MTiBJWsg9wJnAmzLz+kkOEBHHAW8BHt9kMI3llzLzX2Z18FkPAF8EZjrBSJK28gngZZn502kPFBFBdVva2/A27hIuzMznzergMxsAIuIYYGaTiyRpKwm8EfjTph8nGxEPBT4GPLbJ42pZSXVL4L/N4uCzvA3w1TM8tiRpszuBEzPzdbN4lnxm/hA4mmp1QfMTwKtmdvBZrABExEHA1ZR526AkDcmdwHMy85JZn6i+sPsi4GmzPpfudzdwQGbe2PSBZ1XQr5rhsSVJlbmVP0B9X/pvUN2nrvnYCfjtWRy48RWAiNgb+BGwutEDS5K2NNfy31J9u+DnqcpJs3cj1SrA3U0edBZ/S/9tLH9JmqVi5Q+QmV8F3lni3AP1IODkpg/a6ApARDwA+AneLiJJs1K0/DeJiD2pXvK2W8kcA3J1Zh7c5AGbXgF4Hpa/JM1KK8ofIDN/DpxROseAPCoifqnJAzY9ALys4eNJkiqtKf8tvJvqXnXNx0ubPFhjWwARsRb4PtV9i5Kk5rSx/AGIiC8Bh5XOMRB3A/tl5s1NHKzJFYCXYPlLUtNaW/61j5cOMCA7AS9q6mCNDAD1wyFe3MSxJEn3a3v5A1xaOsDANLYN0NQKwLOA/Ro6liSpG+UPMPVLhzSWX4yII5o4UFMDQKMXJkjSwHWl/AH+vXSAAWqkc6e+CDAi9qd6LOQOTQSSpIHrUvkDEBF34VMB5+kOqosBb5vmIE2sAJyK5S9JTehi+e8ArCqdY2B2oXonw1SmWgGIiBVUT4I6YNogkjRwnSt/gIh4MLCudI4B+kpmTnX75bQrAMdh+UvStDpZ/rU1pQMM1KERceg0B5h2ADhpys+XpKHrcvkDPLJ0gAGbqoMnHgAiYjXwnGlOLkkD1/XyBzi+dIAB+/V6K34i06wAPBPYdYrPl6Qh63z5R0RQdYHK2A84ZtJPnmYAeMEUnytJQ9b58q8dhW+ALW3iLp7oLoCI2AW4Adh50hNL0kD1pfyJiE/gFkBpN1A9E+C+cT9x0hWAZ2P5S9K4+lT+R2L5t8E+wLGTfOKkA4DL/5I0nj6VfwBvLJ1D95uok8feAoiIX6BacvCxj5I0mt6UP0BE/CEOAG1yE7AmMzeM80mTrAA8F8tfkkbVt/J/OvCG0jm0lb2AXxn3kyYZAFz+l6TR9K38HwX8Lc29SVbNGbubx9oCiIgHUi3/++IHSVpaH8v/Unz0b1vdAjw4M9eP+gnjTnEnYPlL0nIsf83b7lTv5xnZuAPAc8f8eEkaGstfpYzV0SNvAUTESqorDXebIJQkDYHlr5J+nJkjv6F3nBWAo7D8JWkxlr9Ke0hEPGbUDx5nAHjGBGEkaQgsf7XFyE9ndACQpOlY/mqTkbt6pGsAImINcB0QU4SSpL6x/NU264E9M/OO5T5w1BWAp2P5S9KWLH+10SrgKaN84KgDgMv/krSZ5a82G6mzl90CiIgVwI3Ang2EkqSus/zVdtdk5sOW+6BRVgCehOUvSWD5qxvWRsR/Wu6DRhkARr6lQJJ6zPJXlyy7DTDKAOD+v6Shs/zVNcv+5X3JawAiYjfgZnz1o6ThsvzVRXcCD8zMDYt9wHLFfuQIHyNJfWX5q6t2Bp6w1AcsV+5HN5dFkjrF8lfXLdnhyw0AxzQYRJK6wvJXHyzZ4YteA1C//vdWqmUESRoKy199sS4z913sXy61AvAELH9Jw2L5q0/WRMTDF/uXSw0A7v9LGpK+lf/BWP5aosuXGgDc/5c0FH0s/0uw/LVEl7sCIGnoLH/12aJdvuBFgPWewfdmmUiSWsDyV98lsHdm/nzbf7HYCoB/+5fUd5a/hiCAoxb6F4sNAO7/S+ozy19DsmCnr1zkg4+cYRBJKqmP5X8p8ODSWdRaC3b6dtcARMQq4A4WHw4kqassfw3RLZm5x7Y/udAWwMFY/pL6x/LXUO0eEQds+5MLDQCHzCGMJM2T5a+h267bHQAk9Z3lL8Fjt/2JhQaA7T5IkjrK8pcqrgBIGgzLX9psu27f6i6AiNgbuHGeiSRpBix/aWsbgF0z855NP7HtCoB/+5fUdZa/tL2VVHf53W/bAcD9f0ldZvlLi9vqL/muAEjqC8tfWpoDgKTesfyl5W21yn//RYARsQK4HVhdIJQkTcryl0azLjP33fQPW64AHIDlL6lbLH9pdGsi4oGb/mHLAeDA+WeRpIlZ/tL41m76wYqFflKSWs7ylyaz4ABw4PxzSNLYLH9pcq4ASOoky1+ajisAkjrH8pem5wqApE6x/KVmPGzTDyIziYhVwF0s/HZASSrJ8peac1dm7gybC/8hWP6S2sfyl5q1OiLWwObSd/lfUttY/tJsrIXNA8CB5XJI0nYsf2l2thoAXAGQ1BaWvzRbrgBIah3LX5q9rQaANQWDSBJY/tK8bHUR4F4Fg0iS5S/Nz97gACCpPMtfmi8HAEnFWf7S/O0NEMBqqj+EkjRPlr9UzgNW4N/+Jc2f5S+VtZcDgKR5s/yl8vZ2AJA0T5a/1A6uAEiam76V/6Ox/NVdrgBImos+lv8lWP7qLgcASTNn+Uvt4xaApJmy/KV2cgVA0sxY/lJ77b0C2KV0Ckm9Y/lL7bbLCmDH0ikk9YrlL7XfjiuAVaVTSOoNy1/qhlWuAEhqiuUvdceODgCSmmD5S93iFoCkqVn+Uve4BSBpKpa/1E1uAUiamOUvdZdbAJImYvlL3eYWgKSxWf5S97kFIGkslr/UD24BSBqZ5S/1x6oANgA7lE6iudoIXA/cADwQ2BvYrWgitZ3lL/XLfStLJ9Bc3Ap8ArgA+Ffgp5l575YfEBGrgMcBTweeARwO+P+HwPKXeimAO4CdSwfRTHwb+GPg45m5fpxPjIj/DfhD4DTcJhqyPpb/pcA+pbNIhd25AhirGNQJ11EV9yGZecG45Q+QmT/NzN8BHgG8r+mA6gTLX+qv9QGsw6WwPrkE+LXMvLnJg0bEbwFnAqubPK5ay/KX+u3fVwD3lE6hxrwXeEbT5Q+QmR8AjgR+0PSx1TqWv9R/97gF0B9vysyXbXtxX5My8+tUQ8A3ZnUOFWf5S8Ow3hWAfvgk1cV+M5eZNwC/gkNAH1n+0nDc4wDQfT8EXpiZG+d1wsy8EYeAvrH8pWFxC6AHTsrMn8/7pA4BvWL5S8PjFkDHfSoz/7nUyR0CesHyl4bJLYCO+5PSARwCOs3yl4bLLYAO+0xmXlE6BDgEdJTlLw2bWwAd9tHSAbbkENAplr+ke1ZQvQtA3fPJ0gG25RDQCZa/JIA7VgA3lU6hsX0vM79XOsRCHAJazfKXtMlNDgDd9J3SAZbiENBKlr+kLTkAdNTc7/sfl0NAq1j+krblANBRrR8AwCGgJSx/SQtxAOioO0sHGJVDQFGWv6TFOAB01JrSAcbhEFCE5S9pKQ4AHbV/6QDjcgiYK8tf0nIcADqqcwMAOATMSd/K/zFY/tIs3BSZSUTcCawunUYj2wisqQu1cyLiQcBngMeWztIzfSz/S7D8pabdlZk7r6j/wVWAblkBPKd0iEm5EjATlr+kUd0EVZHc/w/qlOeXDjANh4BGWf6SxuEA0HFPi4iHlA4xDYeARlj+ksa11QCwrmAQTWZH4M9Lh5iWQ8BULH9Jk1gHmweAa8vl0BReGBFPLB1iWg4BE7H8JU3qWtg8AFxTLoemEMBfRsSq0kGm5RAwFstf0jSuAVcA+uBw4MzSIZrgEDASy1/StK4FVwD64uSIeG3pEE1wCFiS5S+pCdcAbHoQ0CrgLjYPBOqejcBJmfn/lQ7SBB8WtB3LX1ITNgKrM3P9CoDMXA9cVzaTprQCODciXlg6SBNcCdiK5S+pKdfVnb/V3/jdBui+HXAI6BvLX1KT7u/6LQeAa+efQzPgENAflr+kpl276QeuAPSTQ0D3Wf6SZsEVgAFwCOguy1/SrFy76QeuAPSbQ0D3WP6SZskVgAFxCOgOy1/SrF276QeRmdUPIlYAtwOry2TSjPmcgHaz/CXN2l3Arpm5EbZYAah/4lulUmnmVgDnuRLQSpa/pHn41qbyh+2f/HflnMNovjYNAb9VOkgTejIEWP6S5mWrjncAGJ5NTwx0CCjP8pc0T0sOAF38IqrxOQSUZ/lLmretvkbefxEgQETsDdw470QqZiNwcmZ+oHSQJnTowkDLX1IJD8rMn236h61WAOp/cf3cI6kUVwLmz/KXVML1W5Y/LPz6X68DGBaHgPmx/CWVsl23LzQAtPELp2bLIWD2LH9JJW339dAVAG3iEDA7lr+k0kZaAXAAGC6HgOZZ/pLaYLtu3+ouAICIWAXcAaycUyi1j3cHNMPyl9QGG4BdMnP9lj+53QpA/QFXzyuVWmnTSsCLSgdpQqGVAMtfUltcvW35w8JbAABfmHEYtd8K4ByHgIlY/pLaZMFOX2wA+OwMg6g7HALGZ/lLapsFO32xAeBzMwyibnEIGJ3lL6mNFuz07S4CvP9fRFwPrJllInXKRuCUzHx/6SBNmMGFgZa/pDZal5n7LvQvFlsBAFcBtDVXAhbXx/K/FMtf6oNFu3ypAcDrALQth4Dt9bX8H1Q6i6RGLNrlrgBoXA4Bm1n+ktpu0S5f6hqAlcCtwM4zCqVuG/o1AZa/pLa7E3hgZm5Y6F8uugJQf8Lls0qlzhvySoDlL6kLLl+s/GHpLQDwOgAtbYhDQN/K/xex/KW+WrLDlxsAvA5Ay9k0BJxUOkgTlhkC+lj+l2D5S321ZIcveg0AQETsBtzM8oOCtBF4cWaeVzpIExa4JsDyl9QlG4E9MvO2xT5gyWKvP/FLTadSL60A3tfTlQDLX1LXfGmp8ofR/mb/yYbCqP/6OgQcZ/lL6phlu3uUAeCiBoJoOHo3BGRmL66FsfylQVm2u5e8BgAgIlYANwJ7NhRKw9CrawK6zvKXBuXnwIMyc+NSH7TsCkB9gIubSqXB6NVKQJdZ/tLgXLxc+cPoV/d7HYAm4RBQmOUvDdJInb3sFgBARKwBrgNiylAaJrcDCrD8pUFKYL/MXLfcB460AlAf6GvTptJguRIwZ5a/NFhfG6X8YbwH/LgNoGk4BMyJ5S8N2shd7QCgedo0BJxcOkhfWf7S4I3c1SNdAwD3vx74JmC3CUNJm2wETs3Mc0sH6RPLXxq824C9lnoD4JZGXgGoD/jpSVNJW1gB/LUrAc2x/CUBnx61/GH8l/xcOObHS4txCGiI5S+pNlZHj7wFABARDwRuAFaNGUpajNsBU7D8JdXWA/tk5q2jfsJYKwD1gT81bippCa4ETMjyl7SFT41T/jD+FgDAByf4HGkpDgFjsvwlbWPsbh5rCwAgIn6Bahtgp3FPJi3D7YARWP6StnE31fL/f4zzSWOvANQn8BXBmgVXApZh+UtawEXjlj9MtgUAbgNodhwCFmH5S1rERJ089hYAQETsQrUNsPMkJ5VGsBF4SWaeUzpIG1j+khZxJ9Xy/x3jfuJEKwD1iT4+yedKI1oBnB0Rp5QOUprlL2kJH5+k/GHyLQBwG0CzN/ghwPKXtIyJu3iiLQCAiFhNtQ2w66Qnl0Y0yO0Ay1/SMm6nWv6/a5JPnngFoD7hxyb9fGkMg1sJsPwljeBjk5Y/TLcFAHDelJ8vjWowQ4DlL2lEU3XwxFsAABGxArgGOGCaENIYer0dYPlLGtGPgLWZuXHSA0y1AlCf+OxpjiGNqbcrAZa/pDGcPU35w5QrAAARsT9wLbDDVAeSxtOrlQDLX9IY7gMOzMyfef9lswAAEJJJREFUTHOQaa8BoA7go4E1b71ZCbD8JY3pomnLHxoYAGrvbeg40jg6PwRY/pIm0EjnTr0FABARO1BdkLDf1AeTxrcROC0z31c6yDgsf0kTuA44IDPvm/ZAjawA1EE69cVXvbICOCsiXlw6yKgsf0kTel8T5Q8NrQAARMRa4PtANHJAaXydWAmw/CVNKIGHZ+Y1TRysqWsAqAN9uqnjSRNo/UqA5S9pCp9uqvyhwQGgdmbDx5PG1dohwPKXNKVGO7axLQCAiHgA8BNgn8YOKk2mVdsBEfFY4DNY/pImcwOwf2be29QBG10BqIO9q8ljShNqzUqA5S+pAe9qsvyh4RUAgIjYm+qWwNWNHliaTNGVAMtfUgPuorr172dNHrTpawCoA57b9HGlCRVbCbD8JTXk3KbLH2awAgAQEQcBVzODAUOa0FxXAix/SQ3ZCDwqM7/b9IFnUtB10AtncWxpQptWAn531ieKiCOx/CU148JZlD/M9m/ob5/hsaVJrAD+IiLOiohVszhBRJwKXIblL6kZM+vSmWwB3H/wiC8Ch8/sBNLkPg/8Zmb+sImDRcTOwJuB/9LE8SQJuDwzj5jVwWe9R/+2GR9fmtRRwHci4p31nSsTiYiVEfEKqsdgW/6SmjTTDp31CsAOwHeBtTM7iTS9/wDOBj4G/Mso99rWT/V7NvAS4BGzjSdpgK4BDmrqxT8LmekAABAR/wX4HzM9idSc26gu4PsecH397R5g3/rbQ4AnAweUCihpEH43M//nLE8wjwFgF+DHwB4zPZEkSf1wM/CQzLxjlieZ+X369S/gjFmfR5Kknjhj1uUPc1gBAIiI3aj2M/ac+ckkSequnwNrM/O2WZ9oLk/qq38hb53HuSRJ6rC3zqP8YU4rAHD/tQA/wFcFS5K0kBuAh81j+R/m+Kz++hf05nmdT5KkjnnzvMof5rgCABARO1E9MGW/uZ1UkqT2uw54eGbePa8TzvVtffUv7I3zPKckSR3wxnmWP8x5BQCgfgnLd/FBKpIkAfyI6ql/6+d50rmuAADUv8A3zPu8kiS11BvmXf5QYAUAqheoAFcDD5/7ySVJao/vA4/KzA3zPvHcVwAA6l/o60ucW5KkFnl9ifKHQisAABGxAvgK8LgiASRJKuvrwKGZubHEyYusAADUv+DTS51fkqTCTi9V/lBwAADIzMuA80tmkCSpgPPrDiym2BbA/QEi1gJXATsWDSJJ0nzcAxycmdeUDFF0BQCg/g14R+kckiTNyTtKlz+0YAUAICJ2pXo40JrSWSRJmqF1VA/9ub10kOIrAAD1b8QflM4hSdKM/UEbyh9asgIAEBEBXAE8sXQWSZJm4EvAk7IlxduKFQCA+jfE2wIlSX11elvKH1o0AABk5ueAvyudQ5Kkhv1d3XGt0ZotgE0i4gCq2wJ3Lp1FkqQG3El129+PSgfZUqtWAADq36A/LZ1DkqSG/Gnbyh9auAIAEBE7AJcDh5XOIknSFL4MHJ6Z95UOsq1WDgAAEfF44F+BlaWzSJI0gQ3A/56ZXysdZCGt2wLYpP4Ne3vpHJIkTejtbS1/aPEKAEBE7ARcCRxUOoskSWP4LnBIZt5dOshiWrsCAFD/xr0MaO+UIknS1hJ4WZvLH1o+AMD9rww+u3QOSZJGdHbpV/2OotVbAJtExO7At4F9S2eRJGkJ1wOPzsxbSgdZTutXAADq38hXls4hSdIyXtmF8oeODAAAmXk+cEHpHJIkLeKCuqs6oRNbAJtExBrgG8DepbNIkrSFnwGPzcx1pYOMqjMrAAD1b+xLSueQJGkbL+lS+UPHBgCAzLwQeE/pHJIk1d5Td1OndGoLYJOI2Bn4CvDI0lkkSYP2HeDQzLyzdJBxdW4FAKD+jf5N4N7SWSRJg3Uv8JtdLH/o6AAAkJlfAf64dA5J0mD9cd1FndTJLYBNImIF8GngyaWzSJIG5VLgqZm5sXSQSXV6AACIiP2pXhi0R+kskqRBuJnqRT8/KR1kGp3dAtik/g/w8tI5JEmD8fKulz/0YAAAyMy/B84pnUOS1Hvn1J3TeZ3fAtgkInYFrgAOLp1FktRLVwFPyszbSwdpQi9WAADq/yDPB24rnUWS1Du3Ac/vS/lDjwYAgMz8DnAy0I9lDUlSGyRwct0xvdGrAQAgMz8KvLl0DklSb7y57pZe6c01AFuqnw9wEXBc6SySpE67GDi+y/f7L6aXAwBAROwFfBl4aOkskqRO+iFwWGbeVDrILPRuC2CT+j/YicDdpbNIkjrnbuDEvpY/9HgAgPvfF/CK0jkkSZ3zii4/538UvR4AADLzHODdpXNIkjrj3XV39FpvrwHYUkSsAi4DjiwcRZLUbl8Ajs3M9aWDzNogBgCAiHgw8EXgwMJRJEntdC1wRGb+e+kg89D7LYBN6v+gzwRuKZ1FktQ6twDPHEr5w4AGAIDMvIrqzoB7S2eRJLXGvVRX/F9VOsg8DWoAAMjMS4HTSueQJLXGaXU3DMrgBgCAzDwPeH3pHJKk4l5fd8LgDOYiwIVExHnAi0rnkCQV8f7MPKl0iFKGPgCsAj4FHFs4iiRpvi4Dnj6E2/0WM+gBACAidgc+DxxcOoskaS6uAo7KzEHfFTb4AQAgItZSPSNgn9JZJEkzdQPVvf7XlA5S2iAvAtxW/T/CM4HbSmeRJM3MbVT3+g++/MEB4H6Z+WXgWcCdpbNIkhp3J/Cs+mu9cADYSmZ+FjgBuKd0FklSY+4BTqi/xqvmALCNzPxH4AXAhtJZJElT2wC8oP7ari04ACwgM/8BOAnYWDqLJGliG4GT6q/p2oYDwCIy82+BlwPeJiFJ3ZPAy+uv5VqAA8ASMvMs4FWlc0iSxvaq+mu4FuEAsIzMPAN4XekckqSRva7+2q0l+CCgEUXEW4DXls4hSVrSWzPz90uH6AJXAEZU/w/11tI5JEmLsvzH4AAwhvp/LLcDJKl9Xmf5j8ctgAlExOnAO4AonUWSBi6pLvhzz39MDgATiojTgPfgKooklbKR6lY/r/afgAPAFCLiN4DzgJWls0jSwGygesiP9/lPyAFgShHxPOCDwI6ls0jSQNxD9Xhfn/A3BQeABkTE04CPAjuXziJJPXcn1Yt9fLb/lBwAGhIRxwAfB3YrnUWSeuo2qlf6+la/BngBW0Pq/yGfAtxQOosk9dANwFMs/+Y4ADQoM78MHAFcVTqLJPXIVcAR9ddYNcQBoGGZeQ1wFHBZ4SiS1AeXAUfVX1vVIAeAGcjMW4CnA+8vnUWSOuz9wNPrr6lqmAPAjGTm+sw8CXh96SyS1EGvz8yTMnN96SB95V0AcxARJwFnAQ8onUWSWu5e4LTMPK90kL5zAJiTiHgycD6we+ksktRStwAnZualpYMMgQPAHEXEwcAngAMLR5GktrkWeGZmehfVnHgNwBzV/2MfAXyhdBZJapEvUN3mZ/nPkQPAnGXmvwPHAu8uHEWS2uDdwLH110bNkVsABUXEKVT/8+9UOIokzdvdwCsy85zSQYbKAaCwiDiU6uLAh5bOIklz8kOqi/2+UjrIkLkFUFj9B+Aw4OLSWSRpDi4GDrP8y3MAaIHMvAk4HngT4JKMpD5Kqq9xx9df81SYWwAtExEnAOfia4Ul9cdtwMmZ+dHSQbSZA0ALRcQjgQuAg0tnkaQpXQU8PzO/UzqItuYWQAvVf1CeBJxTOIokTeMc4EmWfzu5AtByEfHrwHuAPUpnkaQR3Qy8PDP/vnQQLc4BoAMiYn/gPODJpbNI0jIuBU7KzJ+UDqKluQXQAfUfpKcCv0/1pixJapt7qb5GPdXy7wZXADqmfnDQ3wCPLJ1FkmrfAX7Te/u7xRWAjqn/gB1KdV2AJJX2HuBQy797XAHosIh4LnA2sHfpLJIG52fASzLzwtJBNBlXADqs/oP3WKpnBkjSvFwAPNby7zZXAHoiIk4E/hLYt3QWSb11PfDKzDy/dBBNzxWAnqj/QD4aOAvfJyCpWUn1teXRln9/uALQQxFxLHAmcFDhKJK677vAyzLzstJB1CxXAHqo/oN6CPAWYEPZNJI6agPV15BDLP9+cgWg5yLi8VRLd4eVziKpM74MnJaZXysdRLPjCkDP1X+ADwf+K3Bn4TiS2u1Oqq8Vh1v+/ecKwIBExAFUS3r/uXQWSa3zd8DvZ+aPSgfRfDgADFBEHA2cATyxdBZJxX0JOD0zP1c6iObLLYABqv+gPwl4MbCucBxJZayj+hrwJMt/mFwBGLiI2BX4Q+BVwI6F40iavXuAdwB/npm3lw6jchwABEBErAXeBpxYOoukmTkfeE1mXlM6iMpzANBW6ocInQE8rnAUSc35OtU+/2Wlg6g9vAZAW6m/QBwKnAR8v2waSVP6PtWf5UMtf23LFQAtKiJWAqcArwMOKJtG0hh+BLwBOCczfRqoFuQAoGVFxCrgNOCPgP0Kx5G0uOuANwJnZeb60mHUbg4AGllE7AS8AvhvwD6F40ja7AbgzcC7M/Pu0mHUDQ4AGltE7AK8EngtsGfhONKQ/Rx4K/CXmXlH6TDqFgcATSwidgNOr7/tUTiONCQ3U92tc0Zm3lY6jLrJAUBTq1cETqUaBB5WOI7UZ9cA7wT+2r/xa1oOAGpMROwAPB94DdUbCCU143KqB3VdkJn3lQ6jfnAA0ExExDHAq4Hn4vMmpElsBC4E3p6Zny0dRv3jAKCZioiDqN4zcDKwunAcqQvuAs4F3pGZ3y0dRv3lAKC5iIi9gd8GfgdvIZQWcgPwLuCvMvNnpcOo/xwANFcR8QDgecDLgKcCUTaRVFQCnwbOBP4hM+8tnEcD4gCgYuo3EL6E6p3kPmFQQ3Id8D7gbN/Mp1IcAFRcfffAs4CXAscDO5RNJM3EfcBFwHuBj3s1v0pzAFCrRMT+VM8UeAm+gEj98CPgbKp7939SOoy0iQOAWikiVgDHUb3K9DnArmUTSWO5HfgYcB5wcWZuLJxH2o4DgFovIlYDzwReQLVVsHPZRNKC7gQ+DnwQ+ERm3lU4j7QkBwB1Sv3Y4WdTDQPHAzuVTaSBu5tqX/+DwP/y8bzqEgcAdVZE/ALVkwZfADwdWFU2kQZiPfApqtK/MDP/o3AeaSIOAOqFiHggcALVQPBUYLeyidQzt1Hdr38h8NHMvLVwHmlqDgDqnYhYCRwFPKP+9nh84JDGk8DXgE/W3z6fmRvKRpKa5QCg3ouINVRbBM+gurNgz7KJ1FI/By6mKvxPZea6wnmkmXIA0KDUtxc+ieoCwmcAT8S3FQ7VRuBLVIV/EXCFt+tpSBwANGgRsRtwJHA0cAxwON5m2Fd3ApcDnwU+B3whM28rG0kqxwFA2kJ9/cAT2DwQHA2sKRpKk1pHVfSbCv+r7uNLmzkASMuIiIezeSA4EngUsLJoKG1rA3A18AXqws/M75eNJLWbA4A0pohYBRwMHFJ/e2z9/b4lcw3I9cCVwDfq768ErsrM9UVTSR3jACA1JCL2ZuuB4BDgMcDqkrk67C7gW2wu+W8AV2bmz4qmknrCAUCaofqugwOAA4G1C3y/H8O9C2EjcB1wDXDtAt//yKvypdlxAJAKqrcTHsL2w8EaYK8tvnVtFeEu4KYtvq1j+5L/scv2UjkOAFIH1G9E3GuZb7sAO1K9E2HHEX8McA/V8+3vGfHHd7B1uW/3zTfhSe33/wOrWtkviUrxWwAAAABJRU5ErkJggg==",
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={onImagePress}
      onLongPress={enableSelection ? onImageLongPress : undefined}
      style={touchableStyle}
    >
      {isSelected ? (
        <View style={inAppGalleryStyles.relative}>
          <Image style={selectableImageStyles.image} source={source} />
          <Image source={checkSource} style={checkStyle} />
        </View>
      ) : (
        <Image style={selectableImageStyles.image} source={source} />
      )}
    </TouchableOpacity>
  );
};

export default SelectableImage;
