#version 140

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;

in vec2 fragmentTextureCoordinate;
flat in int fragmentTextureIndex;
in vec4 fragmentColor;

out vec4 outColor;

void main() {
  vec4 texColor;
  if (fragmentTextureIndex == 3)
    texColor = texture(texture3, fragmentTextureCoordinate);
  else if (fragmentTextureIndex == 2)
    texColor = texture(texture2, fragmentTextureCoordinate);
  else if (fragmentTextureIndex == 1)
    texColor = texture(texture1, fragmentTextureCoordinate);
  else
    texColor = texture(texture0, fragmentTextureCoordinate);

  if (texColor.a <= 0.0)
    discard;

  outColor = texColor * fragmentColor;
}